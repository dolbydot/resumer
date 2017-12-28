import AV from './leancloud'

export default function (user) {
    var { id, attributes: { username } } = user || AV.User.current() || { attributes: {} }
    return {
        id: id || '',
        username: username || ''
    }
}
//绝对不能让 id 和 username 变为 undefined 或者 null,
//原因：Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的