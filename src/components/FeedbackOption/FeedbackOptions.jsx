
const FeedbackOptions=({ options, onFeedback })=> {
    return (
        <li>
            {options.map(item => {
                return (
                    <button key={item} type="button" onClick={() => onFeedback(item)}>
                        {item}
                    </button>
                );
            })}
        </li>
    )
}

export default FeedbackOptions;
