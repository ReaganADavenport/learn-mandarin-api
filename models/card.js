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

    static async getAllNumbers(){
        try {
            const response = await db.any(`select * from numbers`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getAllDaysAndMonths(){
        try {
            const response = await db.any(`select * from days_and_months`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getAllDates(){
        try {
            const response = await db.any(`select * from dates`);
            return response;
        } catch(err){
            return err.message;
        }
    };

    static async getAllHobbies(){
        try {
            const response = await db.any(`select * from hobbies`);
            return response;
        } catch(err){
            return err.message;
        }
    }

    static async getAllVistiting(){
        try {
            const response = await db.any(`select * from visiting`);
            return response;
        } catch(err){
            return err.message;
        }
    }

    static async getAllAppointments(){
        try {
            const response = await db.any(`select * from appointments`);
            return response;
        } catch(err){
            return err.message;
        }
    }

    static async getAllStudying(){
        try {
            const response = await db.any(`select * from studying`);
            return response;
        } catch(err){
            return err.message;
        }
    }

};

module.exports = Card;