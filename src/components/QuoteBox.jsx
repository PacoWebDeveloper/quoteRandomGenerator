import QuoteButton from "./QuoteButton"
const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {
    
    return (
        <article className="quoteBox">
            <p>{quote.quote}</p>
            <h4>{quote.author}</h4>
            <section className="quoteBox-footer">
                <QuoteButton 
                    getNewValues={getNewValues}
                    backgroundObject={backgroundObject}
                />
                <i className="bx bxs-quote-alt-left" style={colorObject}></i>
            </section>
        </article>
    )
}
export default QuoteBox