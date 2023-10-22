/* __placeholder__ */

import { ref, Ref } from 'vue'
import { range } from 'radash'
import { differenceInCalendarDays } from 'date-fns'
import { format, OptionsWithTZ } from 'date-fns-tz'
import { IChargeTask } from '@/shared-models/charge-task.interface'
import { ChargeMode, dateFromRelative } from '@/shared-models/charge-task-wire.interface'


const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const DAY_NAMES: Record<string, string> = {
  '-4': 'd-4',
  '-3': 'd-3',
  '-2': 'eergisteren',
  '-1': 'gisteren',
  '0': 'vandaag',
  '1': 'morgen',
  '2': 'overmorgen',
  '3': 'd+3',
  '4': 'd+4',
  '5': 'd+5',
}

const TZ_OPTS: OptionsWithTZ = { timeZone: 'Europe/Brussels' }

const props = defineProps<{
  task: IChargeTask
}>()
const emit = defineEmits<{
  'update:task': [value: IChargeTask]
}>()

// select fields content
const hours = Array.from(range(0, 23)).map(h => h.toString())
const minutes = Array.from(range(0, 11, i => 5 * i)).map(m => m.toString())
const days = Array.from(range(-4, 5)).map(rd => ({
  key: rd.toString(),
  title: DAY_NAMES[rd.toString()],
}))

//Variables when being edited
const beingEdited: Ref<boolean> = ref(false)
const dateRelative = ref('0')
const hourFrom = ref('0')
const minutesFrom = ref('0')
const hourTill = ref('0')
const minutesTill = ref('0')
const mode: Ref<ChargeMode> = ref('charge')
const power = ref(0)

const startEdit = () => {
  mode.value = props.task.mode
  power.value = props.task.power
  dateRelative.value = differenceInCalendarDays(props.task.from, new Date()).toString()
  hourFrom.value = props.task.from.getHours().toString()
  minutesFrom.value = props.task.from.getMinutes().toString()
  hourTill.value = props.task.till.getHours().toString()
  minutesTill.value = props.task.till.getMinutes().toString()
  beingEdited.value = true
}

const sendUpdate = () => {
  beingEdited.value = false
  const newValue = {
    id: props.task.id,
    from: dateFromRelative(dateRelative.value, hourFrom.value, minutesFrom.value),
    till: dateFromRelative(dateRelative.value, hourTill.value, minutesTill.value),
    power: parseInt(power.value.toString()),
    mode: mode.value,
  } as IChargeTask
  emit('update:task', newValue)
}

const cancelUpdate = () => {
  beingEdited.value = false
  emit('update:task', props.task)
}

const relDateString = () => {
  return DAY_NAMES[differenceInCalendarDays(props.task.from, new Date()).toString()]
}

const __VLS_componentsOption = {};

let __VLS_name!: 'ChargeTask';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
& __VLS_WithComponent<'VSelect', typeof __VLS_localComponents, "VSelect", "vSelect", "v-select">
& __VLS_WithComponent<'VLayout', typeof __VLS_localComponents, "VLayout", "vLayout", "v-layout">
& __VLS_WithComponent<'VTextField', typeof __VLS_localComponents, "VTextField", "vTextField", "v-text-field">
& __VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn">
;
({} as __VLS_IntrinsicElements).tr;({} as __VLS_IntrinsicElements).tr;({} as __VLS_IntrinsicElements).tr;({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;({} as __VLS_IntrinsicElements).td;
__VLS_components.VSelect;__VLS_components.VSelect;__VLS_components.VSelect;__VLS_components.VSelect;__VLS_components.VSelect;__VLS_components.VSelect;__VLS_components.vSelect;__VLS_components.vSelect;__VLS_components.vSelect;__VLS_components.vSelect;__VLS_components.vSelect;__VLS_components.vSelect;__VLS_components["v-select"];__VLS_components["v-select"];__VLS_components["v-select"];__VLS_components["v-select"];__VLS_components["v-select"];__VLS_components["v-select"];
// @ts-ignore
[VSelect,VSelect,VSelect,VSelect,VSelect,VSelect,];
__VLS_components.VLayout;__VLS_components.VLayout;__VLS_components.VLayout;__VLS_components.VLayout;__VLS_components.vLayout;__VLS_components.vLayout;__VLS_components.vLayout;__VLS_components.vLayout;__VLS_components["v-layout"];__VLS_components["v-layout"];__VLS_components["v-layout"];__VLS_components["v-layout"];
// @ts-ignore
[VLayout,VLayout,VLayout,VLayout,];
__VLS_components.VTextField;__VLS_components.VTextField;__VLS_components.vTextField;__VLS_components.vTextField;__VLS_components["v-text-field"];__VLS_components["v-text-field"];
// @ts-ignore
[VTextField,VTextField,];
__VLS_components.VBtn;__VLS_components.VBtn;__VLS_components.VBtn;__VLS_components.VBtn;__VLS_components.vBtn;__VLS_components.vBtn;__VLS_components.vBtn;__VLS_components.vBtn;__VLS_components["v-btn"];__VLS_components["v-btn"];__VLS_components["v-btn"];__VLS_components["v-btn"];
// @ts-ignore
[VBtn,VBtn,VBtn,VBtn,];
if (__VLS_ctx.beingEdited) {
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_7 = __VLS_6({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
let __VLS_10!: 'VSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSelect : 'vSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSelect : 'v-select' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-select'] : typeof __VLS_resolvedLocalAndGlobalComponents['VSelect'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({...{ }, items: ((__VLS_ctx.days)), density: ("compact"), modelValue: ((__VLS_ctx.dateRelative)), itemValue: ("key"), itemTitle: ("title"), }));
({} as { VSelect: typeof __VLS_10 }).VSelect;
const __VLS_12 = __VLS_11({ ...{ }, items: ((__VLS_ctx.days)), density: ("compact"), modelValue: ((__VLS_ctx.dateRelative)), itemValue: ("key"), itemTitle: ("title"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, items: ((__VLS_ctx.days)), density: ("compact"), modelValue: ((__VLS_ctx.dateRelative)), itemValue: ("key"), itemTitle: ("title"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_17 = __VLS_16({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
let __VLS_20!: 'VSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSelect : 'vSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSelect : 'v-select' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-select'] : typeof __VLS_resolvedLocalAndGlobalComponents['VSelect'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({...{ }, items: ((['charge', 'discharge'])), density: ("compact"), modelValue: ((__VLS_ctx.mode)), }));
({} as { VSelect: typeof __VLS_20 }).VSelect;
const __VLS_22 = __VLS_21({ ...{ }, items: ((['charge', 'discharge'])), density: ("compact"), modelValue: ((__VLS_ctx.mode)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ }, items: ((['charge', 'discharge'])), density: ("compact"), modelValue: ((__VLS_ctx.mode)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
{
const __VLS_25 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_27 = __VLS_26({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
let __VLS_30!: 'VLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VLayout : 'vLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vLayout : 'v-layout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-layout'] : typeof __VLS_resolvedLocalAndGlobalComponents['VLayout'];
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({...{ }, row: (true), }));
({} as { VLayout: typeof __VLS_30 }).VLayout;
({} as { VLayout: typeof __VLS_30 }).VLayout;
const __VLS_32 = __VLS_31({ ...{ }, row: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ }, row: (true), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
let __VLS_35!: 'VSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSelect : 'vSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSelect : 'v-select' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-select'] : typeof __VLS_resolvedLocalAndGlobalComponents['VSelect'];
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({...{ }, items: ((__VLS_ctx.hours)), density: ("compact"), icon: ("none"), modelValue: ((__VLS_ctx.hourFrom)), }));
({} as { VSelect: typeof __VLS_35 }).VSelect;
const __VLS_37 = __VLS_36({ ...{ }, items: ((__VLS_ctx.hours)), density: ("compact"), icon: ("none"), modelValue: ((__VLS_ctx.hourFrom)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{ }, items: ((__VLS_ctx.hours)), density: ("compact"), icon: ("none"), modelValue: ((__VLS_ctx.hourFrom)), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
let __VLS_40!: 'VSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSelect : 'vSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSelect : 'v-select' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-select'] : typeof __VLS_resolvedLocalAndGlobalComponents['VSelect'];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({...{ }, items: ((__VLS_ctx.minutes)), density: ("compact"), modelValue: ((__VLS_ctx.minutesFrom)), }));
({} as { VSelect: typeof __VLS_40 }).VSelect;
const __VLS_42 = __VLS_41({ ...{ }, items: ((__VLS_ctx.minutes)), density: ("compact"), modelValue: ((__VLS_ctx.minutesFrom)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ }, items: ((__VLS_ctx.minutes)), density: ("compact"), modelValue: ((__VLS_ctx.minutesFrom)), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
}
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_47 = __VLS_46({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
let __VLS_50!: 'VLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VLayout : 'vLayout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vLayout : 'v-layout' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-layout'] : typeof __VLS_resolvedLocalAndGlobalComponents['VLayout'];
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({...{ }, row: (true), }));
({} as { VLayout: typeof __VLS_50 }).VLayout;
({} as { VLayout: typeof __VLS_50 }).VLayout;
const __VLS_52 = __VLS_51({ ...{ }, row: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{ }, row: (true), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
let __VLS_55!: 'VSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSelect : 'vSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSelect : 'v-select' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-select'] : typeof __VLS_resolvedLocalAndGlobalComponents['VSelect'];
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({...{ }, items: ((__VLS_ctx.hours)), density: ("compact"), modelValue: ((__VLS_ctx.hourTill)), }));
({} as { VSelect: typeof __VLS_55 }).VSelect;
const __VLS_57 = __VLS_56({ ...{ }, items: ((__VLS_ctx.hours)), density: ("compact"), modelValue: ((__VLS_ctx.hourTill)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{ }, items: ((__VLS_ctx.hours)), density: ("compact"), modelValue: ((__VLS_ctx.hourTill)), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
}
{
let __VLS_60!: 'VSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VSelect : 'vSelect' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vSelect : 'v-select' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-select'] : typeof __VLS_resolvedLocalAndGlobalComponents['VSelect'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({...{ }, items: ((__VLS_ctx.minutes)), density: ("compact"), modelValue: ((__VLS_ctx.minutesTill)), }));
({} as { VSelect: typeof __VLS_60 }).VSelect;
const __VLS_62 = __VLS_61({ ...{ }, items: ((__VLS_ctx.minutes)), density: ("compact"), modelValue: ((__VLS_ctx.minutesTill)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{ }, items: ((__VLS_ctx.minutes)), density: ("compact"), modelValue: ((__VLS_ctx.minutesTill)), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
}
(__VLS_53.slots!).default;
}
(__VLS_48.slots!).default;
}
{
const __VLS_65 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_67 = __VLS_66({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
{
let __VLS_70!: 'VTextField' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VTextField : 'vTextField' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vTextField : 'v-text-field' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-text-field'] : typeof __VLS_resolvedLocalAndGlobalComponents['VTextField'];
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({...{ }, type: ("number"), modelValue: ((__VLS_ctx.power)), density: ("compact"), maxWidth: ("1"), }));
({} as { VTextField: typeof __VLS_70 }).VTextField;
({} as { VTextField: typeof __VLS_70 }).VTextField;
const __VLS_72 = __VLS_71({ ...{ }, type: ("number"), modelValue: ((__VLS_ctx.power)), density: ("compact"), maxWidth: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{ }, type: ("number"), modelValue: ((__VLS_ctx.power)), density: ("compact"), maxWidth: ("1"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
}
(__VLS_68.slots!).default;
}
{
const __VLS_75 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_77 = __VLS_76({ ...{ }, class: ("icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{ }, class: ("icon"), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
{
let __VLS_80!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-btn'] : typeof __VLS_resolvedLocalAndGlobalComponents['VBtn'];
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({...{ onClick: {} as any, }, class: ("mx-2"), icon: ("$complete"), density: ("compact"), }));
({} as { VBtn: typeof __VLS_80 }).VBtn;
({} as { VBtn: typeof __VLS_80 }).VBtn;
const __VLS_82 = __VLS_81({ ...{ onClick: {} as any, }, class: ("mx-2"), icon: ("$complete"), density: ("compact"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("mx-2"), icon: ("$complete"), density: ("compact"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
let __VLS_85 = { 'click': __VLS_pickEvent(__VLS_84['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_82>).onClick) };
__VLS_85 = {
click: (__VLS_ctx.sendUpdate)};
}
{
let __VLS_86!: 'VBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VBtn : 'vBtn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vBtn : 'v-btn' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-btn'] : typeof __VLS_resolvedLocalAndGlobalComponents['VBtn'];
const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({...{ onClick: {} as any, }, class: ("mx-2"), icon: ("$close"), density: ("compact"), }));
({} as { VBtn: typeof __VLS_86 }).VBtn;
({} as { VBtn: typeof __VLS_86 }).VBtn;
const __VLS_88 = __VLS_87({ ...{ onClick: {} as any, }, class: ("mx-2"), icon: ("$close"), density: ("compact"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("mx-2"), icon: ("$close"), density: ("compact"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
let __VLS_91 = { 'click': __VLS_pickEvent(__VLS_90['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_88>).onClick) };
__VLS_91 = {
click: (__VLS_ctx.cancelUpdate)};
}
(__VLS_78.slots!).default;
}
(__VLS_3.slots!).default;
}
// @ts-ignore
[beingEdited,days,dateRelative,days,dateRelative,days,dateRelative,mode,mode,mode,hours,hourFrom,hours,hourFrom,hours,hourFrom,minutes,minutesFrom,minutes,minutesFrom,minutes,minutesFrom,hours,hourTill,hours,hourTill,hours,hourTill,minutes,minutesTill,minutes,minutesTill,minutes,minutesTill,power,power,power,sendUpdate,cancelUpdate,];
}
else {
{
const __VLS_92 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_94 = __VLS_93({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
let __VLS_97 = { 'click': __VLS_pickEvent(__VLS_96['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_93, typeof __VLS_94>).onClick) };
__VLS_97 = {
click: $event => {
if (!(!((__VLS_ctx.beingEdited)))) return;
__VLS_ctx.startEdit()
}};
{
const __VLS_98 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_100 = __VLS_99({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>;
( __VLS_ctx.relDateString() );
(__VLS_101.slots!).default;
}
{
const __VLS_103 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_105 = __VLS_104({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>;
( __VLS_ctx.task.mode );
(__VLS_106.slots!).default;
}
{
const __VLS_108 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_110 = __VLS_109({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
( __VLS_ctx.format(__VLS_ctx.task.from, 'HH:mm', __VLS_ctx.TZ_OPTS) );
(__VLS_111.slots!).default;
}
{
const __VLS_113 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_115 = __VLS_114({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
( __VLS_ctx.format(__VLS_ctx.task.till, 'HH:mm', __VLS_ctx.TZ_OPTS) );
(__VLS_116.slots!).default;
}
{
const __VLS_118 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_120 = __VLS_119({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
let __VLS_122!: __VLS_NormalizeEmits<typeof __VLS_121.emit>;
( __VLS_ctx.task.power );
(__VLS_121.slots!).default;
}
(__VLS_95.slots!).default;
}
// @ts-ignore
[startEdit,relDateString,task,format,task,TZ_OPTS,format,task,TZ_OPTS,task,];
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
props: {
...{} as __VLS_TypePropsToRuntimeProps<{
  task: IChargeTask
}>,
},
emits: ({} as __VLS_NormalizeEmits<typeof emit>),
setup() {
return {
format: format as typeof format,
TZ_OPTS: TZ_OPTS as typeof TZ_OPTS,
hours: hours as typeof hours,
minutes: minutes as typeof minutes,
days: days as typeof days,
beingEdited: beingEdited as typeof beingEdited,
dateRelative: dateRelative as typeof dateRelative,
hourFrom: hourFrom as typeof hourFrom,
minutesFrom: minutesFrom as typeof minutesFrom,
hourTill: hourTill as typeof hourTill,
minutesTill: minutesTill as typeof minutesTill,
mode: mode as typeof mode,
power: power as typeof power,
startEdit: startEdit as typeof startEdit,
sendUpdate: sendUpdate as typeof sendUpdate,
cancelUpdate: cancelUpdate as typeof cancelUpdate,
relDateString: relDateString as typeof relDateString,
};
},
});
export default (await import('vue')).defineComponent({
props: {
...{} as __VLS_TypePropsToRuntimeProps<{
  task: IChargeTask
}>,
},
emits: ({} as __VLS_NormalizeEmits<typeof emit>),
setup() {
return {
};
},
});


type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? { type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>> } : { type: import('vue').PropType<T[K]>, required: true } };
