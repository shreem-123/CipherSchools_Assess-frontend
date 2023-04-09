import "./Input.css";

export function Input({ img, title, disabled }: Props) {
  return (
    <div className={"container-input"}>
      <p>{title}</p>
      <div className={"input_container"}>
        <img src={img} className={"icon"} alt={title} />
        <input
          disabled={disabled}
          className={"input"}
          placeholder={title}
        />
        {!disabled && (
          <img src={"/pencil.svg"} className={"pencil_icon"} alt={title} />
        )}
      </div>
    </div>
  );
}

interface Props {
  img: string;
  title: string;
  disabled?: boolean;
}
