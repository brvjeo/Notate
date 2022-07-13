export class FormHandler{
    constructor(form){
        this.form = form;
    }

    set onsubmit(value){
        this.form.onsubmit = value;
    }

    static transferToJSON(formData){
        let data = {};

        for(let [key,value] of formData.entries()){
            data[key] = value;
        }

        return JSON.stringify(data);
    }
}
