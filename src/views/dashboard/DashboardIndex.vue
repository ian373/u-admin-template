<template>
    <div class="dashboard">
        <el-select v-model="value" class="m-2" placeholder="Select" size="large">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-select v-model="value" class="m-2" placeholder="Select" size="small">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("");

const options = [
    {
        value: "Option1",
        label: "Option1",
    },
    {
        value: "Option2",
        label: "Option2",
    },
    {
        value: "Option3",
        label: "Option3",
    },
    {
        value: "Option4",
        label: "Option4",
    },
    {
        value: "Option5",
        label: "Option5",
    },
];
</script>

<style scoped lang="scss">
.dashboard {
    padding: 10px 8px;
}
</style>
