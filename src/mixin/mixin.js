
// import axios from 'axios'
import { mapState, mapMutations } from 'vuex' //引入state，getters，mutations
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['showViewer', 'preview_src', 'userInfo', 'isLogin'])
    },
    created() {

    },
    mounted() {

    },
    methods: {
        ...mapMutations(['SET_SHOWVIEWER', 'SET_PREVIEW_SRC', 'SET_USERINFO']),
        onPreview: function (path) {
            // 查看大图
            this.SET_SHOWVIEWER(true)
            this.SET_PREVIEW_SRC(path)
        },
        closeViewer() {
            this.SET_SHOWVIEWER(false)
        },
        openLogin: function () {
            // 登录
            this.$login({
                loginSuccess: (data) => {
                    // 修改vuex
                    console.log(data)
                },
            })
        },
        searchFunc(model, phrase) {
            // 素材搜索
            const that = this;
            if (phrase != "") {

                // 接口

                that.$router.push({
                    name: "searchLists",
                    query: {
                        text: phrase,
                        img_type: model,
                        cur_page: 1
                    }
                });
            }
        },
        downloadIamge(imgsrc, name, flag) {//下载图片地址和图片名
            const me = this;
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext("2d");
                var url;
                context.drawImage(image, 0, 0, image.width, image.height);
                if (flag) {
                    url = canvas.toDataURL("image/jpeg"); //得到图片的base64编码数据
                } else {
                    url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                }

                var a = document.createElement("a"); // 生成一个a元素
                var event = new MouseEvent("click"); // 创建一个单击事件
                a.download = name || "photo"; // 设置图片名称

                // console.log(me.dataURLtoBlob(url))

                a.href = URL.createObjectURL(me.dataURLtoBlob(url)); // 将生成的URL设置为a.href属性
                a.dispatchEvent(event); // 触发a的单击事件

                me.$message.info('下载成功');

            };
            image.src = imgsrc;
        },
        dataURLtoBlob: function (dataurl) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        },
        downs(url, flag) {
            if (this.isLogin) {
                this.downloadIamge(url, 'pic', flag)
            } else {
                this.$message.warning('请先登录！');
            }
        },
    }
}