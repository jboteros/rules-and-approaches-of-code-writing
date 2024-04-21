function fn(a: any, b: any) {
    let r = a.filter(x => x.id === b);
    r.forEach(i => console.log(i.n));
}

let d = [{ id: 1, n: 'John' }, { id: 2, n: 'Jane' }];
let id = 1;
fn(d, id);
