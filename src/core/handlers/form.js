export class Form{
    static transferToJSON(formData){
        let data = {};
        for(let [key,value] of formData.entries()){
            data[key] = value;
        }
        return JSON.stringify(data);
    }
}
