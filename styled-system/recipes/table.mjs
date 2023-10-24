import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tableDefaultVariants = {
  "size": "md",
  "variant": "plain"
}
const tableCompoundVariants = []

const tableSlotNames = [
  [
    "root",
    "table__root"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "cell",
    "table__cell"
  ],
  [
    "footer",
    "table__footer"
  ],
  [
    "head",
    "table__head"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "row",
    "table__row"
  ],
  [
    "caption",
    "table__caption"
  ]
]
const tableSlotFns = tableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tableDefaultVariants, getSlotCompoundVariant(tableCompoundVariants, slotName))])

const tableFn = (props = {}) => {
  return Object.fromEntries(tableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const tableVariantKeys = [
  "variant",
  "size"
]

export const table = Object.assign(tableFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: tableVariantKeys,
  variantMap: {
  "variant": [
    "outline",
    "plain"
  ],
  "size": [
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tableVariantKeys)
  },
})