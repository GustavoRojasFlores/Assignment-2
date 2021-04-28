document.getElementById('quotebutton').addEventListener('click', newQuote) // Assigns a new event listener along with a function to the quote button which detects when the button is clicked.
let quoteElement = document.getElementById('quote') // Assigns the quote text to a variable.

function newQuote () {
  let quoteValue = Math.round(Math.random() * 11) // Assigns a random number between 1 and 10 to a variable named quoteValue
  if (quoteValue == 1) {
    quoteElement.innerHTML = "“That brain of mine is something more than merely mortal; as time will show.”"
  } // If quoteValue is 1, the quote text is set to another string value.
  if (quoteValue == 2) {
    quoteElement.innerHTML = "“If you can’t give me poetry, can’t you give me poetical science?”"
  } // If quoteValue is 2, the quote text is set to another different string value, and so on.
  if (quoteValue == 3) {
    quoteElement.innerHTML = "“I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me, how the matter in question was first thought of or arrived at…”"
  }
  if (quoteValue == 4) {
    quoteElement.innerHTML = "“Religion to me is science and science is religion.”"
  }
  if (quoteValue == 5) {
    quoteElement.innerHTML = "“The more I study, the more insatiable do I feel my genius for it to be.”"
  }
  if (quoteValue == 6) {
    quoteElement.innerHTML = "Your best and wisest refuge from all troubles is in your science.”"
  }
  if (quoteValue == 7) {
    quoteElement.innerHTML = "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”"
  }
  if (quoteValue == 8) {
    quoteElement.innerHTML = "“Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science.”"
  }
  if (quoteValue == 9) {
    quoteElement.innerHTML = "“Mathematical science shows what is. It is the language of unseen relations between things. But to use and apply that language, we must be able to fully to appreciate, to feel, to seize the unseen, the unconscious.”"
  }
  if (quoteValue == 10) {
    quoteElement.innerHTML = "“As soon as I have got flying to perfection, I have got a scheme about a steam engine.”"
  }
} // A function that sets the string value of the quote under the portrait to a random different quote out of 10 quotes by Ada Lovelace.

newQuote() // Calls the newQuote function once to generate a random quote when the page loads.