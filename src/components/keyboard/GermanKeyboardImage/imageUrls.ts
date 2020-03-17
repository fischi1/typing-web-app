import spr_0 from "../../../assets/images/keyboard/0.png"
import spr_1 from "../../../assets/images/keyboard/1.png"
import spr_2 from "../../../assets/images/keyboard/2.png"
import spr_3 from "../../../assets/images/keyboard/3.png"
import spr_4 from "../../../assets/images/keyboard/4.png"
import spr_5 from "../../../assets/images/keyboard/5.png"
import spr_6 from "../../../assets/images/keyboard/6.png"
import spr_7 from "../../../assets/images/keyboard/7.png"
import spr_8 from "../../../assets/images/keyboard/8.png"
import spr_9 from "../../../assets/images/keyboard/9.png"
import spr_a from "../../../assets/images/keyboard/a.png"
import spr_ae from "../../../assets/images/keyboard/ae.png"
import spr_after_sz from "../../../assets/images/keyboard/after_sz.png"
import spr_alt from "../../../assets/images/keyboard/alt.png"
import spr_angle_brackets from "../../../assets/images/keyboard/angle_brackets.png"
import spr_b from "../../../assets/images/keyboard/b.png"
import spr_backspace from "../../../assets/images/keyboard/backspace.png"
import spr_c from "../../../assets/images/keyboard/c.png"
import spr_caps from "../../../assets/images/keyboard/caps.png"
import spr_caret from "../../../assets/images/keyboard/caret.png"
import spr_comma from "../../../assets/images/keyboard/comma.png"
import spr_d from "../../../assets/images/keyboard/d.png"
import spr_dash from "../../../assets/images/keyboard/dash.png"
import spr_dot from "../../../assets/images/keyboard/dot.png"
import spr_e from "../../../assets/images/keyboard/e.png"
import spr_enter from "../../../assets/images/keyboard/enter.png"
import spr_f from "../../../assets/images/keyboard/f.png"
import spr_g from "../../../assets/images/keyboard/g.png"
import spr_h from "../../../assets/images/keyboard/h.png"
import spr_hash from "../../../assets/images/keyboard/hash.png"
import spr_i from "../../../assets/images/keyboard/i.png"
import spr_j from "../../../assets/images/keyboard/j.png"
import spr_k from "../../../assets/images/keyboard/k.png"
import spr_l from "../../../assets/images/keyboard/l.png"
import spr_lshift from "../../../assets/images/keyboard/lshift.png"
import spr_m from "../../../assets/images/keyboard/m.png"
import spr_menu from "../../../assets/images/keyboard/menu.png"
import spr_n from "../../../assets/images/keyboard/n.png"
import spr_o from "../../../assets/images/keyboard/o.png"
import spr_oe from "../../../assets/images/keyboard/oe.png"
import spr_p from "../../../assets/images/keyboard/p.png"
import spr_plus from "../../../assets/images/keyboard/plus.png"
import spr_q from "../../../assets/images/keyboard/q.png"
import spr_r from "../../../assets/images/keyboard/r.png"
import spr_rshift from "../../../assets/images/keyboard/rshift.png"
import spr_rstrg from "../../../assets/images/keyboard/rstrg.png"
import spr_s from "../../../assets/images/keyboard/s.png"
import spr_space from "../../../assets/images/keyboard/space.png"
import spr_strg from "../../../assets/images/keyboard/strg.png"
import spr_sz from "../../../assets/images/keyboard/sz.png"
import spr_t from "../../../assets/images/keyboard/t.png"
import spr_tab from "../../../assets/images/keyboard/tab.png"
import spr_u from "../../../assets/images/keyboard/u.png"
import spr_ue from "../../../assets/images/keyboard/ue.png"
import spr_v from "../../../assets/images/keyboard/v.png"
import spr_w from "../../../assets/images/keyboard/w.png"
import spr_win from "../../../assets/images/keyboard/win.png"
import spr_x from "../../../assets/images/keyboard/x.png"
import spr_y from "../../../assets/images/keyboard/y.png"
import spr_z from "../../../assets/images/keyboard/z.png"

export type KeySprite = {
    spriteUrl: string
    keyCode: number
}

export const row1Urls: KeySprite[] = [
    { spriteUrl: spr_caret, keyCode: 220 },
    { spriteUrl: spr_1, keyCode: 49 },
    { spriteUrl: spr_2, keyCode: 50 },
    { spriteUrl: spr_3, keyCode: 51 },
    { spriteUrl: spr_4, keyCode: 52 },
    { spriteUrl: spr_5, keyCode: 53 },
    { spriteUrl: spr_6, keyCode: 54 },
    { spriteUrl: spr_7, keyCode: 55 },
    { spriteUrl: spr_8, keyCode: 56 },
    { spriteUrl: spr_9, keyCode: 57 },
    { spriteUrl: spr_0, keyCode: 48 },
    { spriteUrl: spr_sz, keyCode: 219 },
    { spriteUrl: spr_after_sz, keyCode: 221 },
    { spriteUrl: spr_backspace, keyCode: 8 }
]

export const row2Urls = [
    { spriteUrl: spr_tab, keyCode: 9 },
    { spriteUrl: spr_q, keyCode: 81 },
    { spriteUrl: spr_w, keyCode: 87 },
    { spriteUrl: spr_e, keyCode: 69 },
    { spriteUrl: spr_r, keyCode: 82 },
    { spriteUrl: spr_t, keyCode: 84 },
    { spriteUrl: spr_z, keyCode: 90 },
    { spriteUrl: spr_u, keyCode: 85 },
    { spriteUrl: spr_i, keyCode: 73 },
    { spriteUrl: spr_o, keyCode: 79 },
    { spriteUrl: spr_p, keyCode: 80 },
    { spriteUrl: spr_ue, keyCode: 186 },
    { spriteUrl: spr_plus, keyCode: 187 },
    { spriteUrl: spr_enter, keyCode: 13 }
]

export const row3Urls = [
    { spriteUrl: spr_caps, keyCode: 20 },
    { spriteUrl: spr_a, keyCode: 65 },
    { spriteUrl: spr_s, keyCode: 83 },
    { spriteUrl: spr_d, keyCode: 68 },
    { spriteUrl: spr_f, keyCode: 70 },
    { spriteUrl: spr_g, keyCode: 71 },
    { spriteUrl: spr_h, keyCode: 72 },
    { spriteUrl: spr_j, keyCode: 74 },
    { spriteUrl: spr_k, keyCode: 75 },
    { spriteUrl: spr_l, keyCode: 76 },
    { spriteUrl: spr_oe, keyCode: 192 },
    { spriteUrl: spr_ae, keyCode: 222 },
    { spriteUrl: spr_hash, keyCode: 191 }
]

export const row4Urls = [
    { spriteUrl: spr_lshift, keyCode: 16 },
    { spriteUrl: spr_angle_brackets, keyCode: 226 },
    { spriteUrl: spr_y, keyCode: 89 },
    { spriteUrl: spr_x, keyCode: 88 },
    { spriteUrl: spr_c, keyCode: 67 },
    { spriteUrl: spr_v, keyCode: 86 },
    { spriteUrl: spr_b, keyCode: 66 },
    { spriteUrl: spr_n, keyCode: 78 },
    { spriteUrl: spr_m, keyCode: 77 },
    { spriteUrl: spr_comma, keyCode: 188 },
    { spriteUrl: spr_dot, keyCode: 190 },
    { spriteUrl: spr_dash, keyCode: 189 },
    { spriteUrl: spr_rshift, keyCode: 1 }
]

export const row5Urls = [
    { spriteUrl: spr_strg, keyCode: 17 },
    { spriteUrl: spr_win, keyCode: 91 },
    { spriteUrl: spr_alt, keyCode: 18 },
    { spriteUrl: spr_space, keyCode: 32 },
    { spriteUrl: spr_alt, keyCode: 1 },
    { spriteUrl: spr_win, keyCode: 92 },
    { spriteUrl: spr_menu, keyCode: 93 },
    { spriteUrl: spr_rstrg, keyCode: 1 }
]
