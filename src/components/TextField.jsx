function TextField(props) {
    return (
        <div className="flex justify-between p-4">
            <input className="bg-amber-100 border border-black" type="text" />
            <button onClick={props.onButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokewidth="2">
                    <path strokelinecap="round" strokelinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
            </button>
        </div>
    )
}

export default TextField