function dummySegmentTree(array, fn, N) {
  return function (from, to) {
    let result = N;

    for (let i = from; i < to; i++) {
      result = fn(result, array[i]);
    }

    return result;
  }
}

function segmentTree(array, fn, N) {
  let tree = new Array(array.length * 4);
  let v = 1;
  let tl = 0;
  let tr = array.length - 1;

  function createTree(array, v, tl, tr) {
    if (tl == tr) {
      tree[v] = array[tl]
    } else {
      let tm = Math.floor((tl + tr) / 2);
      createTree(array, v * 2, tl, tm);
      createTree(array, v * 2 + 1, tm + 1, tr);
      tree[v] = fn(tree[v * 2], tree[v * 2 + 1]);
    }
  }
  if (array.length > 0) {
    createTree(array, v, tl, tr);
  }
  return function(left, right) {
    function query(v, tl, tr, l, r) {
      if (l > r) {
        return N;
      }
      if (l == tl && r == tr) {
        return tree[v];
      }
      let tm = Math.floor((tl + tr) / 2);
      let ql = query(v * 2, tl, tm, l, Math.min(r, tm));
      let qr = query(v * 2 + 1, tm + 1, tr, Math.max(l,tm+1), r);
      return fn(ql,qr);
    }

    if (left == right) {
      return N;
    } else if (left > right) {
      throw new Error('Левый индекс должен быть меньше правого :)');
    } else if (left >= array.length || right > array.length || left < 0) {
      throw new Error('Элементы должны быть в границах массива :)');
    } else {
      return query(v, tl, tr, left, right - 1);
    }
  }
  //return neutralTree(N);
}

function recursiveSegmentTree(array, fn, N) {
  return segmentTree(array, fn, N);
}

function getElfTree(array) {
  return recursiveSegmentTree(array, sum, 0);
}

function assignEqually(tree, wishes, stash, elves, gems, week) {
  return {};
}

function assignAtLeastOne(tree, wishes, stash, elves, gems, week) {
  return {};
}

function assignPreferredGems(tree, wishes, stash, elves, gems) {
  return {};
}

function nextState(state, assignment, elves, gems) {
  return state;
}