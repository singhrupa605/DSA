    let stack = [root];
    while (stack.length > 0) {
        let curr = stack.pop()
        if (curr && curr.right) {
            stack.push(curr.right)
        }
        if (curr && curr.left) {
            stack.push(curr.left)
        }
        if (stack.length > 0) {
            curr.right = stack[stack.length - 1]
        }
        if (curr) {
            curr.left = null
        }

    }

