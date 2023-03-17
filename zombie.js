const Tree = (name, children) => ({ name, children });
//manque l'age, le statut d'immunité
const globTree = Tree('PersonA', [
    Tree('PersonB', [
        Tree('PersonC', null),
        Tree('PersonD', null),
        Tree('PersonE', null),
    ]),
    Tree('PersonF', null),
    Tree('PersonG', null),
    Tree('PersonH', null),
    Tree('PersonJ', [
        Tree('PersonK', null),
        Tree('PersonL', null),
    ]),
    Tree('PersonM', null),
    Tree('PersonN', null),
]);

const LAST_CHAR = '└';
const MEDIUM_CHAR = '├';
const TAB_CHAR = '│';

function displayTree(tree, depth = 0, isLastChild = false) {
    let txt;
    if (depth === 0) {
        txt = '';
    } else {
        txt = TAB_CHAR.repeat(depth - 1) + (isLastChild ? LAST_CHAR : MEDIUM_CHAR);
    }
    console.log(txt + tree.name);
    if (!Array.isArray(tree.children)) return;
    for (let i = 0; i < tree.children.length; i++) {
        displayTree(
            tree.children[i],
            depth + 1,
            i === tree.children.length - 1
        );
    }
}

function ZombieA(tree, name, depth = 0, isLastChild = false, keep = false) {
    let txt;
    if (depth === 0) {
        txt = '';
    } else {
        txt = TAB_CHAR.repeat(depth - 1) + (isLastChild ? LAST_CHAR : MEDIUM_CHAR);
    }
    if (tree.name == name || keep){
        console.log(txt + tree.name + '_infecté');
        keep = true;
    } else
        console.log(txt + tree.name);
        
    if (!Array.isArray(tree.children)) return;
    for (let i = 0; i < tree.children.length; i++) {
        ZombieA(
            tree.children[i],
            name,
            depth + 1,
            i === tree.children.length - 1,
            keep
        );
    }
}

function ZombieU(tree, depth = 0, isLastChild = false) {
    let txt;
    if (depth === 0) {
        txt = '';
    } else {
        txt = TAB_CHAR.repeat(depth - 1) + (isLastChild ? LAST_CHAR : MEDIUM_CHAR);
    }
    if (tree.name == tree.children[0].name){
        console.log(txt + tree.name);
    } else
        console.log(txt + tree.name + '_infecté');
    if (!Array.isArray(tree.children)) return;
    for (let i = 0; i < tree.children.length; i++) {
        displayTree(
            tree.children[i],
            depth + 1,
            i === tree.children.length - 1
        );
    }
}

function ZombieC(tree, social, depth = 0, isLastChild = false, keep = true) {
    let txt;
    if (depth === 0) {
        txt = '';
    } else {
        txt = TAB_CHAR.repeat(depth - 1) + (isLastChild ? LAST_CHAR : MEDIUM_CHAR);
    }
    if (depth == social && keep){
        console.log(txt + tree.name + '_infecté');
        
    } else
        console.log(txt + tree.name);
    
    if (!Array.isArray(tree.children)) return;
    for (let i = 0; i < tree.children.length; i++) {
        ZombieC(
            tree.children[i],
            social,
            depth + 1,
            i === tree.children.length - 1,
            keep
        );
        keep = !keep;
    }
}

function VaccinU(tree, name, depth = 0, isLastChild = false, keep = false) {
    let txt;
    if (depth === 0) {
        txt = '';
    } else {
        txt = TAB_CHAR.repeat(depth - 1) + (isLastChild ? LAST_CHAR : MEDIUM_CHAR);
    }
    if (tree.name == name || keep){
        console.log(txt + tree.name);
        keep = true;
    } else
        console.log(txt + tree.name + '_infecté');
    if (!Array.isArray(tree.children)) return;
    for (let i = 0; i < tree.children.length; i++) {
        VaccinU(
            tree.children[i],
            name,
            depth + 1,
            i === tree.children.length - 1,
            keep
        );
    }
}

function VaccinB(tree, social, depth = 0, isLastChild = false, keep = true) {
    let txt;
    if (depth === 0) {
        txt = '';
    } else {
        txt = TAB_CHAR.repeat(depth - 1) + (isLastChild ? LAST_CHAR : MEDIUM_CHAR);
    }
    if (depth == social && keep){
        console.log(txt + tree.name + '_dead');
        
    } else
        console.log(txt + tree.name);
    
    if (!Array.isArray(tree.children)) return;
    for (let i = 0; i < tree.children.length; i++) {
        VaccinB(
            tree.children[i],
            social,
            depth + 1,
            i === tree.children.length - 1,
            keep
        );
        keep = !keep;
    }
}

//displayTree(globTree)
//ZombieU(globTree);
//ZombieA(globTree, 'PersonJ');
//VaccinU(globTree, 'PersonJ');
//VaccinB(globTree, 1);
ZombieC(globTree, 1)