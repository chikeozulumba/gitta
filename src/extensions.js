Array.prototype.inArray = (comparer) => {
    for (let i=0; i < this.length; i+=1) { 
        if (comparer(this[i])) { return true; }
    }
    return false; 
}; 

// adds an element to the array if it does not already exist using a comparer 

Array.prototype.pushIfNotExist = (element, comparer) => {
    if (!this.inArray(comparer)) {
        this.push(element);
    }
};
