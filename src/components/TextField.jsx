function TextField(props) {
    return (
        <div className="flex justify-between pt-4">
            <input type="text" value={props.value} onChange={props.onChange} />
            <button onClick={props.onButtonClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                </svg>
            </button>
        </div>
    );
}

export default TextField;
