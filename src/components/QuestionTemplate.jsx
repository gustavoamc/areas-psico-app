import React from 'react'

function QuestionTemplate({number, title, val}) {
    const id = number;
    const name = `question_${id}`;
    
    const options = [
        { value: "0", label: "Nunca" },
        { value: "1", label: "Quase nunca" },
        { value: "2", label: "Às vezes" },
        { value: "3", label: "Frequentemente" }
    ];

    return (
        <div>
            <h2>{number}. {title}</h2>
            <div className="radio-group">
                {options.map((option) => (
                    <div key={option.value} className="radio-option">
                        <input
                            type="radio"
                            id={`${name}_${option.value}`}
                            name={name}
                            value={option.value}
                            checked={val === option.value}
                        />
                        <label htmlFor={`${name}_${option.value}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { QuestionTemplate }
