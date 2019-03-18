document.addEventListener("DOMContentLoaded", function (event) {
    const doc = document.getElementById('post-content');
    if (doc) {
        loadVue();
    }
});


const loadVue = () => {
    const VideoContainer = Vue.component('video-container', {
        name: 'video-container',
        props: ['mp4', 'webm', 'poster', 'orientation'],
        computed: {
            isPortrait: function () {
                return this.orientation === 'portrait';
            }
        },
        template: `
        <div :class="{ 'video-portrait': isPortrait}">
        <video controls :poster="poster">
            <source :src="mp4" type="video/mp4">
            <source :src="webm" type="video/webm">
            Your browser doesn't support HTML5 video tag.
        </video>
    </div>
    `
    });

    const ImagePop = Vue.component('image-pop', {
        name: 'image-pop',
        props: ['src', 'alt', 'portrait'],
        computed: {
            isPortrait: function () {
                return !!this.portrait;
            },
        },
        template: `
     <div class="image-pop-container" v-bind:class="{ portrait: isPortrait }">
         <img :src="src" :alt="alt" :title="alt" class="pops">
         <small class="image-pop-title">{{ alt }}</small>
     </div>
    `
    });

    const ImageGallery = Vue.component('image-gallery', {
        name: 'image-gallery',
        props: ['images'],
        template: `
        <div class="image-gallery-container">
        <template v-for="image in images">
            <a class="image-gallery-anchor" :href="image.src">
                <img class="image-gallery-image" :src="'' + image.src" :alt="image.alt" :title="image.alt">
                <small class="image-alt-text">{{ image.alt }}</small>
            </a>
        </template>
    </div>
    `
    });

    const vm = new Vue({
        el: '#post-content',
        components: {
            VideoContainer,
            ImageGallery,
            ImagePop,
        }
    });
};
