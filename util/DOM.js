const offset = ele => {
    let result = {
        top: 0,
        left: 0
    }

    // 当前 DOM 节点的 display === 'none' 时, 直接返回 {top: 0, left: 0}
    if (window.getComputedStyle(ele)['display'] === 'none') {
        return result
    }

    let position

    const getOffset = (node, init) => {
        if (node.nodeType !== 1) {
            return
        }

        position = window.getComputedStyle(node)['position']

        if (typeof(init) === 'undefined' && position === 'static') {
            getOffset(node.parentNode)
            return
        }

        result.top = node.offsetTop + result.top - node.scrollTop
        result.left = node.offsetLeft + result.left - node.scrollLeft

        if (position === 'fixed') {
            return
        }

        getOffset(node.parentNode)
    }

    getOffset(ele, true)

    return result
}

const offset2 = ele => {
    let result = {
        top: 0,
        left: 0
    }
    // 当前为 IE11 以下，直接返回 {top: 0, left: 0}
    if (!ele.getClientRects().length) {
        return result
    }

    // 当前 DOM 节点的 display === 'none' 时，直接返回 {top: 0, left: 0}
    if (window.getComputedStyle(ele)['display'] === 'none') {
        return result
    }

    result = ele.getBoundingClientRect()
    var docElement = ele.ownerDocument.documentElement

    return {
        top: result.top + window.pageYOffset - docElement.clientTop,
        left: result.left + window.pageXOffset - docElement.clientLeft
    }
}
