//Caution: This kata does not currently have any known supported versions for JavaScript.
// It may not be completable due to dependencies on out-dated libraries/language versions.
// Your task is simple enough. You will write a function which takes a tree as its input.
// Your function should output one string with the values of the treeDs in an order corresponding to a breadth first search.
// This string also should be broken into levels corresponding to the depth of the treeDs tree, and there should be a space between each value.
// For example if the following tree were input to our function :

function treeD(name, child) {
    this.name = name;
    this.child = child ? child : [];
    this.children = [];
    var self = this;
    function checkChild(data) {
        self.children.push(data.name);
        if (!!data.child.length) {
            for (var i = 0; data.child.length > i; i++) {
                checkChild(data.child[i]);
            }
        }
    }
    if (!!this.child.length) {
        for (var j = 0; this.child.length > j; j++) {
            self.children.push(self.name);
            checkChild(this.child[j]);
        }
    }
}

var GG = new treeD('GG');
var D = new treeD('D',[GG]);
var B = new treeD('B',[D]);
var C = new treeD('C');
var A = new treeD('A',[B,C]);
var tree = new treeD('tree', [A]);
console.log('tree children', tree.children);// A,B,D,C;