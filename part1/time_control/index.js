/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
return{
    dateNow:new Date(date),
    value:date,
    add: function(time, timeType) {
        if(time<0){
            throw new TypeError("Wrong input data");
        }
        switch (timeType) {
            case 'years':
                this.dateNow.setFullYear(this.dateNow.getFullYear() + time);
                break;

            case 'months':
                this.dateNow.setMonth(this.dateNow.getMonth() + time);
                break;
        
            case 'days':
                this.dateNow.setDate(this.dateNow.getDate() + time);
                break;

            case 'hours':
                this.dateNow.setHours(this.dateNow.getHours() + time);
                break;
            
            case 'minutes':
                this.dateNow.setMinutes(this.dateNow.getMinutes() + time);
                break;
            
            default:
                throw new TypeError("Wrong input data");
        }
        
        this.value=(this.dateNow.toISOString().slice(0,10)+' '+this.dateNow.toTimeString().slice(0,5));
        return this;
    },

    subtract: function(time, timeType) {
        if(time<0){
            throw new TypeError("Wrong input data");
        }
        switch (timeType) {
            case 'years':
                this.dateNow.setFullYear(this.dateNow.getFullYear() - time);
                break;

            case 'months':
                this.dateNow.setMonth(this.dateNow.getMonth() - time);
                break;
        
            case 'days':
                this.dateNow.setDate(this.dateNow.getDate() - time);
                break;

            case 'hours':
                this.dateNow.setHours(this.dateNow.getHours() - time);
                break;
            
            case 'minutes':
                this.dateNow.setMinutes(this.dateNow.getMinutes() - time);
                break;
            
            default:
                throw new TypeError("Wrong input data");
        }
        
        this.value=(this.dateNow.toISOString().slice(0,10)+' '+this.dateNow.toTimeString().slice(0,5));
        return this;
    }
} 
};
