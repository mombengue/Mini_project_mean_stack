class Storage {

    constructor(models, name) {
        this.models = models;
        this.name = name;
    }

    setLocal() {
        localStorage.setItem(this.name, JSON.stringify(this.models));
    }

    getLocal() {
        return JSON.parse(localStorage.getItem(this.name));
    }

    clearLocal() {
        localStorage.clear();
    }
}

export default Storage;



