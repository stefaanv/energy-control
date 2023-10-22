/* __placeholder__ */

import { Ref, ref, toRaw } from 'vue'
import { IChargeTask } from '@/shared-models/charge-task.interface'
import ChargeTask from '@/components/ChargeTask.vue'


const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const taskList: Ref<IChargeTask[]> = ref([
  {
    id: 1,
    dateRelative: 0,
    mode: 'charge',
    power: 2000,
    from: new Date(2023, 9, 20, 10, 0, 0),
    till: new Date(2023, 9, 20, 12, 0, 0),
  } as IChargeTask,
  {
    id: 2,
    dateRelative: 5,
    mode: 'discharge',
    power: 1200,
    from: new Date(2023, 9, 21, 10, 30, 0),
    till: new Date(2023, 9, 21, 12, 30, 0),
  } as IChargeTask,
])

const __VLS_componentsOption = {};

let __VLS_name!: 'EnergyDashboard';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {}
 & { 'bold'?: boolean }
 & { 'table-container'?: boolean };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
& __VLS_WithComponent<'VTable', typeof __VLS_localComponents, "VTable", "vTable", "v-table">
& __VLS_WithComponent<'ChargeTask', typeof __VLS_localComponents, "ChargeTask", "chargeTask", "charge-task">
;
({} as __VLS_IntrinsicElements).div;({} as __VLS_IntrinsicElements).div;
__VLS_components.VTable;__VLS_components.VTable;__VLS_components.vTable;__VLS_components.vTable;__VLS_components["v-table"];__VLS_components["v-table"];
// @ts-ignore
[VTable,VTable,];
({} as __VLS_IntrinsicElements).thead;({} as __VLS_IntrinsicElements).thead;
({} as __VLS_IntrinsicElements).tr;({} as __VLS_IntrinsicElements).tr;({} as __VLS_IntrinsicElements).tr;({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).tbody;({} as __VLS_IntrinsicElements).tbody;
__VLS_components.ChargeTask;__VLS_components.ChargeTask;__VLS_components.chargeTask;__VLS_components.chargeTask;__VLS_components["charge-task"];__VLS_components["charge-task"];
// @ts-ignore
[ChargeTask,ChargeTask,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ }, class: ("table-container"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, class: ("table-container"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'VTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VTable : 'vTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vTable : 'v-table' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-table'] : typeof __VLS_resolvedLocalAndGlobalComponents['VTable'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({...{ }, density: ("compact"), }));
({} as { VTable: typeof __VLS_5 }).VTable;
({} as { VTable: typeof __VLS_5 }).VTable;
const __VLS_7 = __VLS_6({ ...{ }, density: ("compact"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, density: ("compact"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as __VLS_IntrinsicElements)["thead"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
({} as __VLS_IntrinsicElements).thead;
({} as __VLS_IntrinsicElements).thead;
const __VLS_12 = __VLS_11({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_17 = __VLS_16({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_22 = __VLS_21({ ...{ }, class: ("bold text-center"), colspan: ("5"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ }, class: ("bold text-center"), colspan: ("5"), style: ({}), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_25 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_27 = __VLS_26({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_32 = __VLS_31({ ...{ }, class: ("text-center"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ }, class: ("text-center"), style: ({}), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_33.slots!).default;
}
{
const __VLS_35 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_37 = __VLS_36({ ...{ }, class: ("text-center"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{ }, class: ("text-center"), style: ({}), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(__VLS_38.slots!).default;
}
{
const __VLS_40 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_42 = __VLS_41({ ...{ }, class: ("text-center"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ }, class: ("text-center"), style: ({}), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_43.slots!).default;
}
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_47 = __VLS_46({ ...{ }, class: ("text-center"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{ }, class: ("text-center"), style: ({}), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
(__VLS_48.slots!).default;
}
{
const __VLS_50 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_52 = __VLS_51({ ...{ }, class: ("text-center"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{ }, class: ("text-center"), style: ({}), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
(__VLS_53.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_55 = ({} as __VLS_IntrinsicElements)["tbody"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
({} as __VLS_IntrinsicElements).tbody;
({} as __VLS_IntrinsicElements).tbody;
const __VLS_57 = __VLS_56({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
for (const [task, index] of __VLS_getVForSourceType((__VLS_ctx.taskList)!)) {
{
let __VLS_60!: 'ChargeTask' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ChargeTask : 'chargeTask' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.chargeTask : 'charge-task' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['charge-task'] : typeof __VLS_resolvedLocalAndGlobalComponents['ChargeTask'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({...{ "onUpdate:task": {} as any, }, key: ((index)), task: ((__VLS_ctx.taskList[index])), }));
({} as { ChargeTask: typeof __VLS_60 }).ChargeTask;
({} as { ChargeTask: typeof __VLS_60 }).ChargeTask;
const __VLS_62 = __VLS_61({ ...{ "onUpdate:task": {} as any, }, key: ((index)), task: ((__VLS_ctx.taskList[index])), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{ "onUpdate:task": {} as any, }, key: ((index)), task: ((__VLS_ctx.taskList[index])), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
let __VLS_65 = { 'update:task': __VLS_pickEvent(__VLS_64['update:task'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_62>)["onUpdate:task"]) };
__VLS_65 = {
"update:task": $event => {
console.log(__VLS_ctx.toRaw(__VLS_ctx.taskList[index]))
}};
}
// @ts-ignore
[taskList,taskList,taskList,taskList,toRaw,taskList,];
}
(__VLS_58.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["table-container"];
__VLS_styleScopedClasses["bold"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-center"];
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
toRaw: toRaw as typeof toRaw,
ChargeTask: ChargeTask as typeof ChargeTask,
taskList: taskList as typeof taskList,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
};
},
});


