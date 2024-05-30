import isMobile from 'ismobilejs'

const judgeIsMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  const res = isMobile(userAgent).any

  if (res) {
    // 这是移动设备（平板也包含在内）
    console.log('是移动设备或平板')
  } else {
    // 这是桌面设备
    console.log('是桌面设备')
  }

  return res
}

window.addEventListener('resize', () => judgeIsMobile())
//往返缓存：保存这页面的数据，DOM和JavaScript的状态，实际来说是将整个页面都保存在了内存里
//pageshow是我们重新加载页面触发的事件,如果使用load的话，火狐浏览器的往返缓存是不会改变rem大小的
window.addEventListener('pageshow', function (e) {
  //pageshow的persisted值返回true，就是说如果页面是从缓存取过来的页面，也需要重新计算一下rem大小
  if (e.persisted) {
    judgeIsMobile()
  }
})

export default judgeIsMobile()
