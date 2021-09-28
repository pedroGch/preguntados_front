<template>
    <p class="right">
        {{ `${paginator.current} de ${paginator.total_pages}` }}
        &nbsp;&nbsp;&nbsp;
        <a
            @click="previous"
            class="waves-effect waves-light btn white black-text"
            :class="isFirst ? 'disabled' : ''"
        >
            <i class="material-icons left">chevron_left</i>
        </a>

        <a
            @click="next"
            class="waves-effect waves-light btn white black-text"
            :class="isLast ? 'disabled' : ''"
        >
            <i class="material-icons left">chevron_right</i>
        </a>
    </p>
</template>

<script>
export default {
    props: {
        paginator: { type: Object, required: true },
    },

    methods: {
        next() {
            this.paginator.current = this.paginator.current + 1;
        },

        previous() {
            this.paginator.current = this.paginator.current - 1;
        },
    },

    computed: {
        isFirst() {
            return this.paginator.current <= 1;
        },

        isLast() {
            return this.paginator.current >= this.paginator.total_pages;
        },
    },
};
</script>
