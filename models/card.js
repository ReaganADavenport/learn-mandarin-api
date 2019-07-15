const db = require('./conn.js');

class Card {
    constructor(id, character, pinyin, english){
        this.id = id;
        this.character = character;
        this.pinyin = pinyin;
        this.english = english;
    };

    static async getAllGreetings(){
        try{
            const response = await db.any(`select * from greetings`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getAllNationalities(){
        try {
            const response = await db.any(`select * from nationalities`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getAllFamily(){
        try {
            const response = await db.any(`select * from family`);
            return response;
        } catch(err){
            return err.message;
        }
    };

};

module.exports = Card;