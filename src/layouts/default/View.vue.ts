/* __placeholder__ */

  //
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
//

const __VLS_componentsOption = {};

let __VLS_name!: 'View';
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
& __VLS_WithComponent<'VMain', typeof __VLS_localComponents, "VMain", "vMain", "v-main">
& __VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view">
;
__VLS_components.VMain;__VLS_components.VMain;__VLS_components.vMain;__VLS_components.vMain;__VLS_components["v-main"];__VLS_components["v-main"];
// @ts-ignore
[VMain,VMain,];
__VLS_components.RouterView;__VLS_components.routerView;__VLS_components["router-view"];
// @ts-ignore
[RouterView,];
{
let __VLS_0!: 'VMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VMain : 'vMain' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vMain : 'v-main' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['v-main'] : typeof __VLS_resolvedLocalAndGlobalComponents['VMain'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ }, }));
({} as { VMain: typeof __VLS_0 }).VMain;
({} as { VMain: typeof __VLS_0 }).VMain;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
let __VLS_5!: 'RouterView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterView : 'routerView' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.routerView : 'router-view' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['router-view'] : typeof __VLS_resolvedLocalAndGlobalComponents['RouterView'];
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({...{ }, }));
({} as { RouterView: typeof __VLS_5 }).RouterView;
const __VLS_7 = __VLS_6({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
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


