class ArtGallery {
    creator = '';
    possibleArticles = {};
    listOfArticles = [];
    guests = [];
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
        this.listOfArticles = [];
        this.guests = [];
    };

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) throw new Error ("This article model is not included in this gallery!");
        const findArticle = this.listOfArticles.find(name => name.articleName === articleName);
        if (findArticle) {
            findArticle.quantity += quantity;
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };
    inviteGuest(guestName, personality) {
        
        const findGuest = this.guests.find(guest => guest.guestName === guestName);
        if (findGuest) {
            throw new Error (`${guestName} has already been invited.`);
        } 

        let points = 50;
        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        } else {
            points = 50;
        }
            this.guests.push({
                guestName,
                points,
                purchaseArticle: 0
            });
            return `You have successfully invited ${guestName}!`;
    };
    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();
        const findArticle = this.listOfArticles.find(n => n.articleName === articleName && n.articleModel === articleModel);
        if (!findArticle) throw new Error ("This article is not found.");
        if (findArticle.quantity === 0) return `The ${articleName} is not available.`;
        const findGuest = this.guests.find(g => g.guestName === guestName);
        if (!findGuest) return `This guest is not invited.`;
        if (findGuest.points >= this.possibleArticles[articleModel]) {
            findGuest.points -= this.possibleArticles[articleModel];
            findArticle.quantity -= 1;
            findGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        } else {
            return `You need to more points to purchase the article.`
        }
    };
    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            const res = [`Articles information:`];
            this.listOfArticles.forEach(n => res.push(`${n.articleModel} - ${n.articleName} - ${n.quantity}`));
            return res.join('\n');
        } else {
            if (criteria === 'guest') {
                const res = [`Guests information:`];
                this.guests.forEach(g => res.push(`${g.guestName} - ${g.purchaseArticle}`));
                return res.join('\n');
            };
        };
    };
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
