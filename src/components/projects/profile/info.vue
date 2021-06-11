<template>
    <div class="card flex flex-wrap">
        <div v-for="(segment, index) in segments"
             :key="index"
             class="w-full md:w-1/2 p-2">
            <div :class="[
                'h-full border-nk-gray-500 border-opacity-70',
                {
                    'border-b pb-6': device.isMobile ? index + 1 !== segments.length : !(index + 1 === segments.length || index + 2 === segments.length)
                }
            ]">
                <p class="text-white opacity-40 font-serif text-lg mb-2">
                    {{ segment.title }}
                </p>
                <ul>
                    <li v-for="(item, key) in segment.items" :key="key">
                        <label class="text-white text-bold font-serif ml-1">
                            {{ item.label }}:
                        </label>
                        <span>
                            {{ item.value }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { toFarsiDigits } from '~/scripts/utils/string';

export default {
    props: {
        project: {
            type: Object,
            default: () => ({}),
        },
    },
    data: () => ({
        formatter: new Intl.ListFormat('fa'),
    }),
    computed: {
        ...mapState(['device']),
        segments() {
            return [
                {
                    title: 'اطلاعات کلی',
                    items: [
                        {
                            label: 'شروع',
                            value: toFarsiDigits(this.project.start_year || 'نامشخص'),
                        },
                        {
                            label: 'برچسب‌ها',
                            value: this.toListFormat(this.project.tags.map(tag => tag.title)),
                        },
                    ],
                },
                {
                    title: 'ناکامی پروژه',
                    items: [
                        {
                            label: 'پایان',
                            value: toFarsiDigits(this.project.start_year || 'نامشخص'),
                        },
                        {
                            label: 'دلیل',
                            value: this.project.failure_reason,
                        },
                    ],
                },
                {
                    title: 'بنیان‌گذاران',
                    items: [
                        {
                            label: 'تعداد',
                            value: toFarsiDigits(this.project.founders.length || 'نامشخص'),
                        },
                        {
                            label: 'اسامی',
                            value: this.toListFormat(this.project.founders),
                        },
                    ],
                },
                {
                    title: 'سرمایه‌گذاران',
                    items: [
                        {
                            label: 'تعداد',
                            value: toFarsiDigits(this.project.investors.length || 'نامشخص'),
                        },
                        {
                            label: 'اسامی',
                            value: this.toListFormat(this.project.investors),
                        },
                    ],
                },
            ];
        },
    },
    methods: {
        toListFormat(values) {
            if (values && values.length) {
                return this.formatter.format(values);
            }
            return 'نامشخص';
        },
    },
};
</script>
