import { ComponentType } from "react";

export default function getDisplayName<P extends object>(Component : ComponentType<P>) : string {
    return Component.displayName || Component.name || 'Component';
}