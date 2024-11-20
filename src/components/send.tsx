import "../styles/button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    func: () => void;
}

export default function Send({ text, secondary, func }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"} onClick={func}>
            {text}
        </button>
    )
}