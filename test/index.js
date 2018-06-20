const { Vue, VueQrcode } = window;

Vue.component(VueQrcode.name, VueQrcode);

describe('<qrcode>', () => {
  it('tag', () => {
    const vm = new Vue({
      template: '<qrcode tag="img" value="1"></qrcode>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('img');
  });

  it('options', (done) => {
    const vm = new Vue({
      template: '<qrcode value="1" :options="{ size: 200 }"></qrcode>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.width).to.equal(200);
      done();
    }, 500);
  });

  it('value', (done) => {
    const vm = new Vue({
      template: '<qrcode value="1"></qrcode>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.toDataURL()).to.equal('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAD2UlEQVR4Xu2cy27jMBAE1///0V5gb1IAFQo9ohht5zoiOeyaBynb+Xy/3++f/m2jwKdAtmHxz5EC2YtHgWzGo0AKZDcFNvOnPaRANlNgM3cwQz6fz1KX6Vp09uf8PPlrn5/ePO6P7iG0weUOnwLECmyfX76/AtmsAhTILwdCNdCmOPWE83y2hJK/dv3b92czhDZ4u8PykEH+FsiJmBWkGQKnGpsRVIJsRNP6dj56ntaL95eWrDRiKUNofnuMpefJTkBoPAHXF0NacNrhApE1ngQ7AyKgZLfz2eft+un8P0pcS9bxHlIg8tBgew7W7PBVzH+XIfbUQsDS+aZ75K8rWamAzRAIIarR0wJOz9cMAQWoRE3bC6RAjgrYCLs7gqZ7ym772/6mToCtoLaH3X3xHT9lkWBkJ0FpPNlpfrLT/GS388cZQg6R3TpM802XNLueXb8Zcvqy/9MBUSBvA5KmMI1Pm246nvxL7XhRtW97U4dofCpoOp78S+0FMvw2t0CkoK/PkDQi0vF0MSMA5/WpZKT+puPxHpIukI4vkFTB4fEFMixoOl2BnBQkQahG2/EpwNQf22Omb/rYQ6ygtslOAyiQkwIFkv1jjGYIBBRl8OMlizKA7GlJIYFW9wAq6dof+y6LBCd7gVyHlC5ZJDjZC6RALhVIe8DjJYtq+HQGTGecrunyu8fn/VvgumQViDvWFsjwR7RW0GaIvJi+vmTRBm2EUZOkHmVLqvUvzQDyL+4hBXL9CywC8AOwvRjaCLUR2AyBECeBmiGLM4RSbhoYZWCacXSvWW3XJatA3K90LdACkfcUysjUXiBvB0IlLbVTBNp7Ac2X2q0/4xmSCk7jSSArAM2X2q0/BXLzV1ML5KRAGuHp+NuB0D2DSo6107Fx9XzWH3oeL9LpqxMrED1PG6Lx9mJJ81l/6PkCgWNugYACFGEk4H+XIZRyVjDbRJ8WnNa3+9fHXhIsdkAeQ0kQewhJM3I8QG1TH3egQA4xpj8xLJBjjo7rkWbIdIlIS8jTJY38J4BxhhTIdcbYHlwgw8fwZsiwoGnJez2Q9FhN421JoZeHBBT92b2p0wZSe4HIj1BTwWl8gRTIZYy87pSVNlXqEXSPSMcXCNS06ZJGQAukQI6/QKIIvPtNwOqmf3uG0IbIboHs3iMev4eQ4GQvkKNCcQ8hwcleIAVy/EBo+GfPy0sWRXxqtz3i7gyz89P+x5s6LZjaCwSQ2WNngVwr0AyRX6JIM5QCMgZCC9Q+qwAee2eX62ykQIGQQovtBbJYcFquQEihxfYCWSw4LVcgpNBie4EsFpyW+wszukc+Pe7YoAAAAABJRU5ErkJggg==');
      done();
    }, 500);
  });
});
