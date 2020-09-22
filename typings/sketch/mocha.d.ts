/*
ABOUT:
The rest of this file are bare minimum types referenced in sketch.d.ts.
NS*, CG*, WK*: AppKit types
MS*: Sketch interface (@interface) or delegate (@protocol)
SCK*: More Sketch classes
others are likely more Sketch things
*/

/**
 * Instance properties in Mocha are set up as setters for the value type directly, and a
 * getter that returns a method that gets the value. We can't document this properly
 * in TypeScript, so we'll have to settle for this, and type your getters.
 */
type MochaProperty<T> = (() => T) | T;

declare const MOPointer: any;

declare class Mocha {
  static sharedRuntime(): Mocha;
  globalSymbolNames(): NSArray;
  loadFrameworkWithName_inDirectory(name: string, dir: string): void;
  // there's more https://github.com/logancollins/Mocha/blob/master/Mocha/MochaRuntime.h
}

declare class MOClassDescription {
  name(): NSString;
  superclass(): NSArray;
  ancestors(): NSArray;
  instanceVariables(): NSArray;
  classMethods(): NSArray;
  instanceMethods(): NSArray;
  properties(): NSArray;
  protocols(): NSArray;
  instanceVariablesWithAncestors(): NSArray;
  classMethodsWithAncestors(): NSArray;
  instanceMethodsWithAncestors(): NSArray;
  propertiesWithAncestors(): NSArray;
  protocolsWithAncestors(): NSArray;
}

declare class MOPropertyDescription {
  name(): NSString;
  typeEncoding(): NSString;
  ivarName(): NSString;
  ownershipRule(): any;
  dynamic(): boolean;
  nonAtomic(): boolean;
  readOnly(): boolean;
  weak(): boolean;
}

interface MOMethodDescription {
  selector(): NSString;
  typeEncoding(): NSString;
}
