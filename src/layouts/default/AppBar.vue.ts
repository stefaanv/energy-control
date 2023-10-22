/* __placeholder__ */

  //
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
//

const __VLS_componentsOption = {};

let __VLS_name!: 'AppBar';
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
& __VLS_WithComponent<'VAppBar', typeof __VLS_localComponents, "VAppBar", "vAppBar", "v-app-bar">
& __VLS_WithComponent<'VAppBarTitle', typeof __VLS_localComponents, "VAppBarTitle", "vAppBarTitle", "v-app-bar-title">
& __VLS_WithComponent<'VIcon', typeof __VLS_localComponents, "VIcon", "vIcon", "v-icon">
;
__VLS_components.VAppBar;__VLS_components.VAppBar;__VLS_components.vAppBar;__VLS_components.vAppBar;__VLS_components["v-app-bar"];__VLS_components["v-app-bar"];
// @ts-ignore
[VAppBar,VAppBar,];
__VLS_components.VAppBarTitle;__VLS_components.VAppBarTitle;__VLS_components.vAppBarTitle;__VLS_components.vAppBarTitle;__VLS_components["v-app-bar-title"];__VLS_components["v-app-bar-title"];
// @ts-ignore
[VAppBarTitle,VAppBarTitle,];
__VLS_components.VIcon;__VLS_components.vIcon;__VLS_components["v-icon"];
// @ts-ignore
[VIcon,];
{
let __VLS_0!: 'VAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VAppBar : 'vAppBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vAppBar : 'v-app-bar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-app-bar'] : typeof __VLS_resolvedLocalAndGlobalComponents['VAppBar'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ }, flat: (true), }));
({} as { VAppBar: typeof __VLS_0 }).VAppBar;
({} as { VAppBar: typeof __VLS_0 }).VAppBar;
const __VLS_2 = __VLS_1({ ...{ }, flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, flat: (true), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'VAppBarTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VAppBarTitle : 'vAppBarTitle' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vAppBarTitle : 'v-app-bar-title' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-app-bar-title'] : typeof __VLS_resolvedLocalAndGlobalComponents['VAppBarTitle'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({...{ }, }));
({} as { VAppBarTitle: typeof __VLS_5 }).VAppBarTitle;
({} as { VAppBarTitle: typeof __VLS_5 }).VAppBarTitle;
const __VLS_7 = __VLS_6({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
let __VLS_10!: 'VIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VIcon : 'vIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vIcon : 'v-icon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-icon'] : typeof __VLS_resolvedLocalAndGlobalComponents['VIcon'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({...{ }, icon: ("mdi-circle-slice-6"), }));
({} as { VIcon: typeof __VLS_10 }).VIcon;
const __VLS_12 = __VLS_11({ ...{ }, icon: ("mdi-circle-slice-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, icon: ("mdi-circle-slice-6"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
};
},
});


