const ROOT_URL = `https://favqs.com/api`;
const API_KEY = "999a8784aba93b65bac1f33688743006";

export async function getListQuote(params?: any) {
  let result = "";

  let url = `${ROOT_URL}/quotes`;
  if (params) {
    const queryString = new URLSearchParams(params).toString();
    url = `${ROOT_URL}/quotes?${queryString}`;
  }

  const response = await fetch(
    url,
    {
      headers: {
        Authorization: `Token ${API_KEY}`,
      },
    },
  );
  if (response) {
    const responseJSON = await response.json();
    if (responseJSON && responseJSON.quotes) {
      responseJSON.quotes.forEach((item: any, i: number) => {
        result += `${i + 1} - ${item.body}\n`;
      });
    }
  }

  return result;
}

export async function getRandomQuote() {
  let result = null;

  const response = await fetch(
    `${ROOT_URL}/qotd`,
  );
  if (response) {
    const responseJSON = await response.json();
    if (responseJSON && responseJSON.quote) {
      result = responseJSON.quote.body;
    }
  }

  return result;
}
