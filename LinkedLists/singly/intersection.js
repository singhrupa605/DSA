
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let h1 = headA, h2 = headB;
    while (h1!==h2) {
        h1 = h1.next;
        h2 = h2.next;
        if (h1 === h2) return h1
        if (!h1) {
            h1 = headB
        }
        if (!h2) {
            h2 = headA
        }
    }
    return h1
};