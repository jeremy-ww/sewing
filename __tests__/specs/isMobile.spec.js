import isMobile from 'sewing/isMobile'

describe('isMobile method', function () {

  it('should find the mobile device', function () {

    const IOS = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    const GALAXY_S5 = 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Mobile Safari/537.36'
    const NEXUS_5X = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Mobile Safari/537.36'
    const NEXUS_6P = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Mobile Safari/537.36'
    const ANDROID_WECHAT = 'mozilla/5.0 (linux; u; android 4.1.2; zh-cn; mi-one plus build/jzo54k) applewebkit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 micromessenger/5.0.1.352'
    const IOS_WECHAT = 'mozilla/5.0 (iphone; cpu iphone os 5_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0'

    const IPAD = 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    const IPAD_PRO = 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'

    const MAC_CHROME = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36'

    expect(isMobile(ANDROID_WECHAT)).toBe(true)
    expect(isMobile(IOS_WECHAT)).toBe(true)
    expect(isMobile(GALAXY_S5)).toBe(true)
    expect(isMobile(NEXUS_5X)).toBe(true)
    expect(isMobile(NEXUS_6P)).toBe(true)
    expect(isMobile(IOS)).toBe(true)

    expect(isMobile(MAC_CHROME)).toBe(false)
    expect(isMobile(IPAD_PRO)).toBe(false)
    expect(isMobile(IPAD)).toBe(false)
  })
})
