const API_BASE = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const prependBaseUrl = (obj) => {
  if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (key === 'url' && typeof obj[key] === 'string' && obj[key].startsWith('/')) {
        obj[key] = BACKEND_URL + obj[key];
      } else if (typeof obj[key] === 'object') {
        prependBaseUrl(obj[key]);
      }
    }
  }
};

export const getAllArticles = async () => {
  try {
    const res = await fetch(`${API_BASE}/articles?populate=*`);
    if (!res.ok) throw new Error('Failed to fetch articles');
    const data = await res.json();
    data.data.forEach(article => {
      if (article.cover) prependBaseUrl(article.cover);
    });
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getArticleById = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/articles?id=${id}&populate=*`);
    if (!res.ok) throw new Error('Failed to fetch article');
    const data = await res.json();
    const article = data.data[0];
    if (article && article.cover) prependBaseUrl(article.cover);
    return article;
  } catch (error) {
    console.error(error);
    throw error;
  }
};