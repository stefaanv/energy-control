/* __placeholder__ */

  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');

const __VLS_componentsOption = {};

let __VLS_name!: 'Default';
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
& __VLS_WithComponent<'VApp', typeof __VLS_localComponents, "VApp", "vApp", "v-app">
& __VLS_WithComponent<'DefaultBar', typeof __VLS_localComponents, "DefaultBar", "defaultBar", "default-bar">
& __VLS_WithComponent<'DefaultView', typeof __VLS_localComponents, "DefaultView", "defaultView", "default-view">
;
__VLS_components.VApp;__VLS_components.VApp;__VLS_components.vApp;__VLS_components.vApp;__VLS_components["v-app"];__VLS_components["v-app"];
// @ts-ignore
[VApp,VApp,];
__VLS_components.DefaultBar;__VLS_components.defaultBar;__VLS_components["default-bar"];
// @ts-ignore
[DefaultBar,];
__VLS_components.DefaultView;__VLS_components.defaultView;__VLS_components["default-view"];
// @ts-ignore
[DefaultView,];
{
let __VLS_0!: 'VApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VApp : 'vApp' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vApp : 'v-app' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-app'] : typeof __VLS_resolvedLocalAndGlobalComponents['VApp'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ }, }));
({} as { VApp: typeof __VLS_0 }).VApp;
({} as { VApp: typeof __VLS_0 }).VApp;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'DefaultBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.DefaultBar : 'defaultBar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.defaultBar : 'default-bar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['default-bar'] : typeof __VLS_resolvedLocalAndGlobalComponents['DefaultBar'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({...{ }, }));
({} as { DefaultBar: typeof __VLS_5 }).DefaultBar;
const __VLS_7 = __VLS_6({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
{
let __VLS_10!: 'DefaultView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.DefaultView : 'defaultView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.defaultView : 'default-view' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['default-view'] : typeof __VLS_resolvedLocalAndGlobalComponents['DefaultView'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({...{ }, }));
({} as { DefaultView: typeof __VLS_10 }).DefaultView;
const __VLS_12 = __VLS_11({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
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
DefaultBar: DefaultBar as typeof DefaultBar,
DefaultView: DefaultView as typeof DefaultView,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
};
},
});


