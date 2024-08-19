document.addEventListener('DOMContentLoaded', () => {
    const articleForm = document.getElementById('articleForm');
    const articlesDiv = document.getElementById('articles');

    // Load articles from LocalStorage
    const loadArticles = () => {
        const articles = JSON.parse(localStorage.getItem('articles')) || [];
        articlesDiv.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
            articlesDiv.appendChild(articleElement);
        });
    };

    // Save article to LocalStorage
    const saveArticle = (title, content) => {
        const articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.push({ title, content });
        localStorage.setItem('articles', JSON.stringify(articles));
        loadArticles();
    };

    // Handle form submission
    articleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        saveArticle(title, content);
        articleForm.reset();
    });

    // Initial load
    loadArticles();
});
