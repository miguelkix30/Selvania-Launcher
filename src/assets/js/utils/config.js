/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */

const pkg = require('../package.json');
const fetch = require("node-fetch");
const convert = require("xml-js");
let url = pkg.user ? `${pkg.url}/${pkg.user}` : pkg.url

let config = `${url}/launcher/config-launcher/config.json`;
let news = `${url}/launcher/news-launcher/news.json`;
//let news = `http://azuriom.999dripshop.com/api/rss`;

class Config {
    GetConfig() {
        return new Promise((resolve, reject) => {
            fetch(config).then(config => {
                return resolve(config.json());
            }).catch(error => {
                return reject(error);
            })
        })
    }

    async GetNews() {
        let rss = await fetch(news);
        if (rss.status === 200) {
            try {
                let news = await rss.json();
                return news;
            } catch (error) {
                return false;

//       let rss = await fetch(news).then(res => res.text());
//        let rssparse = JSON.parse(convert.xml2json(rss, { compact: true })
//                    .replace("content:encoded", "content")
//                    .replace("dc:creator", "creator"));
//        let data = [];

//        if (rssparse.rss.channel.item.length) {
//            for (let i of rssparse.rss.channel.item) {
//                let item = {}
//                item.title = i.title._text;
//                item.content = i.content. _text;
//                item.author = i.author._text;
//                item.publish_date = i.pubDate._text;

//                console.log(item)

//                data.push(item);
            }
        } else {
//            return false;

//console.log(rssparse);

//            let item = {}
//            item.title = rssparse.rss.channel.item.title._text;
//            item.content = rssparse.rss.channel.item.content._text;
//            item.author = rssparse.rss.channel.item.creator._text;
//            item.publish_date = rssparse.rss.channel.item.pubDate._text;
//            data.push(item);
        }
//        return data;
    }
    
}

export default new Config;