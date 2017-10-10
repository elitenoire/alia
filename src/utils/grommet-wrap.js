import React, { Component } from 'react'
import mapProps from './map-props'
import FormField from 'grommet/components/FormField'

export default function grommetWrap(GrommetComponent) {
    class WrappedComponent extends Component {
        getRenderedComponent() {
            return this.grommetComponent
        }
        render() {
            const { help, label, error, ...rest } = mapProps(this.props, GrommetComponent.displayName)
            console.log(mapProps(this.props, GrommetComponent.displayName))
            return (
            <FormField
                htmlFor={rest.id}
                help={help}
                label={label}
                error={error}>
                <GrommetComponent
                ref={component => this.grommetComponent = component}
                {...rest} />
            </FormField>
            )
        }
    }
    WrappedComponent.displayName = GrommetComponent.name
    return WrappedComponent
}
