import Storage from "./storage"

class Model extends Storage {

    constructor(models, name) {
        super(models, name);
    }

    add(model) {
        this.models.push(model);
        this.setLocal();
    }

    delete(id) {
        this.models = this.models.filter((model) => {
            model.id != id;
        });
        this.setLocal();
    }

    getModels() {
        return this.getLocal() == null ? [] : this.getLocal();
    }
}

export default Model;
