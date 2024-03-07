import * as imports from "./imports.module";
import { type SubmitHandler } from "react-hook-form";
import formStyles from "../../../../shared/stylesheets/form.styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const schema = imports.z.object({
  title: imports.z.string().min(1),
  description: imports.z.string().min(1),
  body: imports.z.string().min(1),
  tags: imports.z.string(),
});

type FormFields = imports.z.infer<typeof schema>;

const EditorFormComponent = () => {
  const { post } = imports.usePostArticle();
  const navigate = imports.useNavigate();
  const existingArticle = useSelector(
    (state: RootState) => state.article.article,
  );
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = imports.useForm<FormFields>({
    resolver: imports.zodResolver(schema),
    defaultValues: {
      title: existingArticle?.title,
      description: existingArticle?.description,
      body: existingArticle?.body,
      tags: existingArticle?.tagList.join(" "),
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const formattedData = {
        ...data,
        tags: data.tags.split(/\s+|,|;/).filter(Boolean),
      };
      const response = await post({ article: formattedData });
      navigate(`/article/${response?.article.slug}`);
    } catch (error) {
      if (Array.isArray(error)) {
        setError("root", {
          message: error.join(", "),
        });
      } else if (error instanceof Error) {
        setError("root", {
          message: error.message,
        });
      }
    }
  };

  return (
    <section className={`editor-form ${formStyles.form}`}>
      <header></header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
          <div className={formStyles.error}>{errors.root.message}</div>
        )}
        <input
          {...register("title")}
          type={"text"}
          placeholder={"Article Title"}
        />
        {errors.title && (
          <div className={formStyles.error}>{errors.title.message}</div>
        )}
        <input
          {...register("description")}
          type={"text"}
          placeholder={"What is this article about?"}
        />
        {errors.description && (
          <div className={formStyles.error}>{errors.description.message}</div>
        )}
        <textarea
          {...register("body")}
          placeholder={"Write your article"}
          rows={8}
        />
        {errors.body && (
          <div className={formStyles.error}>{errors.body.message}</div>
        )}
        <input {...register("tags")} type={"text"} placeholder={"Enter tags"} />
        {errors.tags && (
          <div className={formStyles.error}>{errors.tags.message}</div>
        )}
        {isSubmitting ? (
          <button type={"button"} disabled>
            Publishing Article <imports.ButtonSpinnerA />
          </button>
        ) : (
          <button type={"submit"}>Publish Article</button>
        )}
      </form>
    </section>
  );
};

export default EditorFormComponent;
