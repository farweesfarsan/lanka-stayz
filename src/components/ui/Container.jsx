export default function Container({ className = "", children, ...rest }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12 ${className}`} {...rest}>{children}</div>;
}
