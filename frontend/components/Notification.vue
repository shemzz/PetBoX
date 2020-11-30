<template>
    <div class="notification" :class="type">
        <button class="delete"></button>
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: 'Notification',
        props: {
            message: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
        },
    };
</script>