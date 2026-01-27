// TC : O(2N)
// SC : O(N) + O(N)

var copyRandomList = function (head) {
  if (!head) return null;
  let map = new Map();
  let temp = head;
  while (temp) {
    let node = new _Node(temp.val);
    map.set(temp, node);
    temp = temp.next;
  }
  let curr = head;
  let dummy = new _Node(-1),
    res = dummy;

  while (curr) {
    let nextNode = curr.next;
    let random = curr.random;
    let node = map.get(curr);
    node.next = map.get(nextNode) || null;
    node.random = map.get(random) || null;
    res.next = node;
    res = res.next;
    curr = curr.next;
  }

  return dummy.next;
};

// TC : O(3N)

var copyRandomList = function (head) {
  if (!head) return null;
  let temp = head;
  while (temp) {
    let node = new _Node(temp.val);
    node.next = temp.next;
    temp.next = node;
    temp = temp.next.next;
  }

  let curr = head;
  while (curr) {
    let node = curr.next;
    node.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }
  let dummy = new _Node(0),
    res = dummy;
  curr = head;
  while (curr) {
    res.next = curr.next;
    curr.next = curr.next.next;
    res = res.next;
    curr = curr.next;
  }

  return dummy.next;
};
