import styles from "../BtnsContainer.module.css";

const BtnsContainer = ({ onBtnClick }) => {
    const buttonNames = [
        "C",
        "1",
        "2",
        "3",
        "+",
        "4",
        "5",
        "6",
        "-",
        "7",
        "8",
        "9",
        "/",
        "*",
        "0",
        ".",
        "=",
    ];

    return (
        <div>
            <div className={styles.btnContainer}>
                {buttonNames.map((buttonName) => (
                    <button key={buttonName} className={styles.calculator__key}
                        onClick={() => onBtnClick(buttonName)}
                    >
                        {buttonName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BtnsContainer;
